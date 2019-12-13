export interface TWidget {
    color: string;
    description?: string;
    name: string;
}

export const WIDGETS: TWidget[] = [
    { color: '#00FFFF', description: 'C', name: 'c' },
    { color: '#FF00FF', description: 'M', name: 'm' },
    { color: '#FFFF00', description: 'Y', name: 'y' },
    { color: '#000000', description: 'K', name: 'k' },
];
