import React, { useState, useEffect } from "react";
import "./activeBids.css";
import socket from "../../socket";

const ActiveBids = ({
    auctionId,
    userId,
    startTime,
    endTime,
    minBid,
    enabled,
    winnerName,
}) => {
    const [bidAmount, setBidAmount] = useState(minBid);
    const [timeRemaining, setTimeRemaining] = useState("");

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const start = new Date(startTime);
            const end = new Date(endTime);
            const difference = now > start ? end - now : start - now;

            if (difference <= 0) {
                setTimeRemaining({
                    days: (0).toString().padStart(2, "0"),
                    hours: (0).toString().padStart(2, "0"),
                    minutes: (0).toString().padStart(2, "0"),
                    seconds: (0).toString().padStart(2, "0"),
                });

                clearInterval(timer); // Detener el temporizador si ya terminó

                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days: days.toString().padStart(2, "0"),
                hours: hours.toString().padStart(2, "0"),
                minutes: minutes.toString().padStart(2, "0"),
                seconds: seconds.toString().padStart(2, "0"),
            });
        };
        // Actualizar cada segundo
        const timer = setInterval(calculateTimeRemaining, 1000);

        // Ejecutar inmediatamente para mostrar la cuenta regresiva al cargar
        calculateTimeRemaining();

        // Limpiar el temporizador al desmontar
        return () => clearInterval(timer);
    }, [endTime]);

    useEffect(() => {
        setBidAmount(minBid);
    }, [minBid]);
    const handleBid = () => {
        if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
            alert("Por favor, introduce un monto válido.");
            return;
        }
        // Emitir el evento de puja al servidor
        socket.emit(
            "place-bid",
            { auctionId, userId, bidAmount },
            (response) => {
                if (response?.success) {
                    alert("Puja realizada con éxito.");
                    setBidAmount("");
                } else {
                    alert(
                        `Error al realizar la puja: ${
                            response?.error || "Desconocido"
                        }`
                    );
                }
            }
        );
    };
    return (
        <div className="my-bid">
            <h3>My bid</h3>
            <h4 className="min-bid">Min Bid {minBid}€</h4>
            <input
                type="number"
                placeholder={minBid}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                min={minBid}
                disabled={!enabled}
            />
            <button onClick={handleBid} disabled={!enabled}>
                Bid
            </button>
            {!winnerName && (
                <>
                    <h3>
                        {new Date() > new Date(startTime)
                            ? "Finish In"
                            : "Starting Soon"}
                    </h3>
                    <div className="timer">
                        <div className="days">
                            <p className="number">{timeRemaining.days}</p>
                            <p className="label">days</p>
                        </div>
                        <p>:</p>
                        <div className="hours">
                            <p className="number">{timeRemaining.hours}</p>
                            <p className="label">hours</p>
                        </div>
                        <p>:</p>
                        <div className="mins">
                            <p className="number">{timeRemaining.minutes}</p>
                            <p className="label">mins</p>
                        </div>
                        <p>:</p>
                        <div className="seconds">
                            <p className="number">{timeRemaining.seconds}</p>
                            <p className="label">seconds</p>
                        </div>
                    </div>
                </>
            )}
            {winnerName && (
                <>
                    <h3>Winner</h3>
                    <p>{winnerName}</p>
                </>
            )}
        </div>
    );
};

export default ActiveBids;
