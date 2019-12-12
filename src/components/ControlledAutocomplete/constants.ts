export interface TWidget {
    color: string;
    description?: string;
    name: string;
}

export const WIDGETS: TWidget[] = [
    { color: 'cyan', description: 'C', name: 'c' },
    { color: 'magenta', description: 'M', name: 'm' },
    { color: 'yellow', description: 'Y', name: 'y' },
    { color: 'black', description: 'K', name: 'k' },
];
