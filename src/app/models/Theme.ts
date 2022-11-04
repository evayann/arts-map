import { OsmFeature } from "./OsmFeature";
import { OsmFeatures } from "./OsmFeatures";

export type Theme = Record<string, OsmFeatures>;
export type ThemesByCategory = Record<string, Theme>;

const build = (features: [key: string, value: string][]): OsmFeatures => new OsmFeatures(...features.map(feature => new OsmFeature('all', ...feature)));
const buildSame = (key: string, values: string[]): OsmFeatures => new OsmFeatures(...values.map(value => new OsmFeature('all', key, value))); 

export const themesList: ThemesByCategory = {
    City: {
        Appartements: build([[ 'building', 'appartment' ]]),
        Religious: buildSame('building', ['cathedral', 'chapel', 'church', 'monastery', 'mosque', 'religious', 'temple', ])
    },
    Roads: {
        'Speed Camera': build([[ 'highway', 'speed_camera' ]])
    }
};
