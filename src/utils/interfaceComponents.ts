export interface Item {
    label: string;
    property: string;
    option: Mapping[]
}

export interface Mapping {
    label: string;
    value: any;
}