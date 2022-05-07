export interface GithubLogin {
    login: string;
    avatar_url: string;
    type: string;
    html_url: string;
    result_num: number;
    hide_cause_of_api_limit: boolean;
    id?: number;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    node_id?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: string;
    score?: number;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    url?: string;
}

export interface GithubData{
    incomplete_results?: boolean;
    items: GithubLogin[];
    total_count: number;
}
