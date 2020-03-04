export interface Game {
    game_id: number;
    name: string;
    type: string;
    internal_number: string;
    internal_name: any | null;
    boxart: string;
    boxart_480w: string;
    banner: any;
    snapshot: Date;
    total_count: number;
    rankings: Array<Ranking>;
}

export interface Ranking {
    account: number;
    user_name: string;
    signature: string;
    game_id: number;
    score: string;
    created_at: Date;
    rank: number;
    type1_rank: number;
}