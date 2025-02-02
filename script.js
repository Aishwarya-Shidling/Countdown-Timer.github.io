let countdown;
        function startCountdown() {
            clearInterval(countdown);
            const input = document.getElementById("datetime").value;
            const eventTime = new Date(input).getTime();
            
            if (!input || eventTime <= Date.now()) {
                alert("Please choose a future date and time.");
                return;
            }

            countdown = setInterval(() => {
                const now = new Date().getTime();
                const remainingTime = eventTime - now;
                
                if (remainingTime <= 0) {
                    clearInterval(countdown);
                    document.getElementById("timer").innerText = "Time's up!";
                    return;
                }
                
                const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                const hours = String(Math.floor((remainingTime / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutes = String(Math.floor((remainingTime / (1000 * 60)) % 60)).padStart(2, '0');
                const seconds = String(Math.floor((remainingTime / 1000) % 60)).padStart(2, '0');
                
                document.getElementById("timer").innerText = `${days}d ${hours}:${minutes}:${seconds}`;
            }, 1000);
        }