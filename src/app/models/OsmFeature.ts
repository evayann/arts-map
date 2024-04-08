export const ALL_GEOMETRY = "all";
export type OsmGeometry = 'node' | 'way' | 'relation' | typeof ALL_GEOMETRY;

export type OsmRequestParameters = {
    features: OsmFeature[];
    bbox: string;
    timeout?: number;
};

export class OsmFeature {
    public style: L.PathOptions;
    constructor(public geometry: OsmGeometry, public key: string, public value: string | '*') {
        this.style = {
            color: '#aa0000',
            weight: 1,
            fillColor: '#00aa00',
            fillOpacity: 1
        };
    }

    toRequest(bbox: string): string {
        const geometry: string = this.geometry === ALL_GEOMETRY ? 'nwr' : this.geometry;
        const element: string = this.value == '*' ? this.key : `${this.key}"="${this.value}`;
        return `${geometry}["${element}"](${bbox});`;;
    }

    equals(feature: OsmFeature): boolean {
        return this.geometry === feature.geometry && this.key === feature.key && this.value === feature.value;
    }
}
