
export class DBClient {
    constructor() {
    }

    public status(): string {
        return "it's working now";
    }
}

export class DBHelper {
    private static _dbClient: DBClient;

    public static getDatabaseClient(): DBClient {
        if (!this._dbClient) {
            this._dbClient = new DBClient();
        }
        return this._dbClient;
    }
}