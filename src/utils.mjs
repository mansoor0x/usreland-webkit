export const logger = {
    verbose: true,
    init() {
        this.console = document.getElementById("console");
        if (!this.console) {
            this.console = document.body;
        }
    },
    info(msg) {
        this.log(`[+] ${msg}`);
    },
    error(msg) {
        this.log(`[-] ${msg}`);
    },
    debug(msg) {
        if (this.verbose) {
            this.log(`[*] ${msg}`);
        }
    },
    log(msg) {
        if (this.console) {
            if (typeof this.console.append === "function") {
                this.console.append(`${msg}\n`);
            } else if (typeof this.console.innerHTML !== "undefined") {
                this.console.innerHTML += `${msg}\n`;
            } else {
                console.log(msg);
            }
        } else {
            console.log(msg);
        }
    }
};

export const version = {
    console: undefined,
    major: undefined,
    minor: undefined,
    raw: undefined,
    init() {
        const ua = navigator.userAgent;
        this.raw = ua;
        logger.info(`Raw UA: ${ua}`);

        const matches = ua.match(/PlayStation\s+(\d+)\/(\d+)\.(\d+)/);
        if (matches === null) {
            throw new Error(`${ua} not supported !!`);
        }

        this.console = parseInt(matches[1], 10);
        this.major = parseInt(matches[2], 10);
        this.minor = parseInt(matches[3], 16);

        logger.info(`Agent: ${ua}`);
        logger.info(`Parsed: console=${this.console} version=${this.toString()}`);
    },
    toString() {
        return `${this.major}.${this.minor.toString(16).padStart(2, "0")}`;
    }
};
