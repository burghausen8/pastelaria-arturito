import { RealtimeDataBaseClient } from "@/core/real-time-database-client/real-time-database-client";
import { User } from "@/core/types/user";

const PATH_USERS = 'users';
const PATH_USERS_ID = 'users/{id}';

export class UserService {
    private database: RealtimeDataBaseClient;

    constructor() {
        this.database = new RealtimeDataBaseClient();
    }

    async createUser(user: User) {
        return await this.database.post(PATH_USERS, user, {});
    }
}