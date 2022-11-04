import { OsmFeature } from "./OsmFeature";

export class OsmFeatures extends Array<OsmFeature> {
    toRequest(bbox: string): string {
        return this.reduce((acc, feature) => `${acc}\n${feature.toRequest(bbox)}`, "");
    }

    findByFeatureProperty(property: Record<string, any>): OsmFeature | undefined {
        const keys = Object.keys(property);
        const osmFeature = this.find(f => keys.includes(f.key) && (f.value === '*' || property[f.key] === f.value));
        return osmFeature;
    }
}