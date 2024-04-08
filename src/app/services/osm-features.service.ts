import { Injectable } from '@angular/core';
import { overpass } from 'overpass-ts';
import { OsmGeometry, OsmRequestParameters } from '../models/OsmFeature';

@Injectable({
  providedIn: 'root',
})
export class OsmFeaturesService {
  constructor() { }

  getGeometries(): OsmGeometry[] {
    return ['way', 'node', 'relation'];
  }

  // "#mw-content-text > div.mw-parser-output > table:nth-child(18) > tbody"
  // Array.from(al.children).filter(el => el.children.length > 1).map(el => `'${el.children[1].children[0].innerText}'`).join(",")

  getFeatures(): Record<string, string[]> {
    return {
      building: [
        'yes',
        'house',
        'residential',
        'garage'
      ]
    }
    return {
      "4wd_only": [
        "yes"
      ],
      "abutters": [
        "commercial | industrial | mixed | residential | retail etc."
      ],
      "access": [
        "designated",
        "no",
        "private",
        "yes / wired / wlan / terminal / no",
        "agricultural / delivery / designated / destination / forestry / no / official / permissive / private / yes"
      ],
      "addr:city": [
        "user defined"
      ],
      "addr:conscriptionnumber": [
        "user defined"
      ],
      "addr:country": [
        "user defined"
      ],
      "addr:county": [
        "user defined"
      ],
      "addr:flats": [
        "user defined"
      ],
      "addr:full": [
        "user defined"
      ],
      "addr:housename": [
        "user defined"
      ],
      "addr:housenumber": [
        "user defined"
      ],
      "addr:interpolation": [
        "all/even/odd/ alphabetic"
      ],
      "addr:place": [
        "user defined"
      ],
      "addr:postbox": [
        "user defined"
      ],
      "addr:postcode": [
        "user defined"
      ],
      "addr:province": [
        "user defined"
      ],
      "addr:state": [
        "user defined"
      ],
      "addr:street": [
        "user defined"
      ],
      "admin_level": [
        "(number)",
        "(number)"
      ],
      "agricultural": [
        "yes / no"
      ],
      "alt_name": [
        "User defined"
      ],
      "amenity": [
        "bar",
        "biergarten",
        "cafe",
        "fast_food",
        "food_court",
        "ice_cream",
        "pub",
        "restaurant",
        "college",
        "driving_school",
        "kindergarten",
        "language_school",
        "library",
        "toy_library",
        "training",
        "music_school",
        "school",
        "university",
        "bicycle_parking",
        "bicycle_repair_station",
        "bicycle_rental",
        "boat_rental",
        "boat_sharing",
        "bus_station",
        "car_rental",
        "car_sharing",
        "car_wash",
        "compressed_air",
        "vehicle_inspection",
        "charging_station",
        "ferry_terminal",
        "fuel",
        "grit_bin",
        "motorcycle_parking",
        "parking",
        "parking_entrance",
        "parking_space",
        "taxi",
        "atm",
        "bank",
        "bureau_de_change",
        "baby_hatch",
        "clinic",
        "dentist",
        "doctors",
        "hospital",
        "nursing_home",
        "pharmacy",
        "social_facility",
        "veterinary",
        "arts_centre",
        "brothel",
        "casino",
        "cinema",
        "community_centre",
        "conference_centre",
        "events_venue",
        "fountain",
        "gambling",
        "love_hotel",
        "nightclub",
        "planetarium",
        "public_bookcase",
        "social_centre",
        "stripclub",
        "studio",
        "swingerclub",
        "theatre",
        "courthouse",
        "fire_station",
        "police",
        "post_box",
        "post_depot",
        "post_office",
        "prison",
        "ranger_station",
        "townhall",
        "bbq",
        "bench",
        "dog_toilet",
        "dressing_room",
        "drinking_water",
        "give_box",
        "parcel_locker",
        "shelter",
        "shower",
        "telephone",
        "toilets",
        "water_point",
        "watering_place",
        "sanitary_dump_station",
        "recycling",
        "waste_basket",
        "waste_disposal",
        "waste_transfer_station",
        "animal_boarding",
        "animal_breeding",
        "animal_shelter",
        "baking_oven",
        "childcare",
        "clock",
        "crematorium",
        "dive_centre",
        "funeral_hall",
        "grave_yard",
        "hunting_stand",
        "internet_cafe",
        "kitchen",
        "kneipp_water_cure",
        "lounger",
        "marketplace",
        "monastery",
        "photo_booth",
        "place_of_mourning",
        "place_of_worship",
        "public_bath",
        "refugee_site",
        "vending_machine",
        "user defined",
        "bar",
        "biergarten",
        "cafe",
        "fast_food",
        "food_court",
        "ice_cream",
        "pub",
        "restaurant",
        "college",
        "driving_school",
        "kindergarten",
        "language_school",
        "library",
        "toy_library",
        "training",
        "music_school",
        "school",
        "university",
        "bicycle_parking",
        "bicycle_repair_station",
        "bicycle_rental",
        "boat_rental",
        "boat_sharing",
        "bus_station",
        "car_rental",
        "car_sharing",
        "car_wash",
        "compressed_air",
        "vehicle_inspection",
        "charging_station",
        "ferry_terminal",
        "fuel",
        "grit_bin",
        "motorcycle_parking",
        "parking",
        "parking_entrance",
        "parking_space",
        "taxi",
        "atm",
        "bank",
        "bureau_de_change",
        "baby_hatch",
        "clinic",
        "dentist",
        "doctors",
        "hospital",
        "nursing_home",
        "pharmacy",
        "social_facility",
        "veterinary",
        "arts_centre",
        "brothel",
        "casino",
        "cinema",
        "community_centre",
        "conference_centre",
        "events_venue",
        "fountain",
        "gambling",
        "love_hotel",
        "nightclub",
        "planetarium",
        "public_bookcase",
        "social_centre",
        "stripclub",
        "studio",
        "swingerclub",
        "theatre",
        "courthouse",
        "fire_station",
        "police",
        "post_box",
        "post_depot",
        "post_office",
        "prison",
        "ranger_station",
        "townhall",
        "bbq",
        "bench",
        "dog_toilet",
        "dressing_room",
        "drinking_water",
        "give_box",
        "parcel_locker",
        "shelter",
        "shower",
        "telephone",
        "toilets",
        "water_point",
        "watering_place",
        "sanitary_dump_station",
        "recycling",
        "waste_basket",
        "waste_disposal",
        "waste_transfer_station",
        "animal_boarding",
        "animal_breeding",
        "animal_shelter",
        "baking_oven",
        "childcare",
        "clock",
        "crematorium",
        "dive_centre",
        "funeral_hall",
        "grave_yard",
        "hunting_stand",
        "internet_cafe",
        "kitchen",
        "kneipp_water_cure",
        "lounger",
        "marketplace",
        "monastery",
        "photo_booth",
        "place_of_mourning",
        "place_of_worship",
        "public_bath",
        "refugee_site",
        "vending_machine",
        "user defined"
      ],
      "area": [
        "yes"
      ],
      "atv": [
        "access",
        "For values see access above"
      ],
      "bdouble": [
        "access",
        "For values see access above"
      ],
      "bicycle": [
        "access",
        "access",
        "yes",
        "For values see access above + dismount",
        "For values see access above"
      ],
      "bicycle_road": [
        "yes"
      ],
      "boat": [
        "access",
        "access",
        "For values see access above",
        "For values see access above"
      ],
      "border_type": [
        "*"
      ],
      "boundary": [
        "aboriginal_lands",
        "administrative",
        "border_zone",
        "forest",
        "forest_compartment",
        "hazard",
        "maritime",
        "marker",
        "national_park",
        "place",
        "political",
        "postal_code",
        "protected_area",
        "special_economic_zone",
        "disputed",
        "user defined",
        "aboriginal_lands",
        "administrative",
        "border_zone",
        "forest",
        "forest_compartment",
        "hazard",
        "maritime",
        "marker",
        "national_park",
        "place",
        "political",
        "postal_code",
        "protected_area",
        "special_economic_zone",
        "disputed",
        "user defined"
      ],
      "brand": [
        "user defined"
      ],
      "bridge": [
        "yes",
        "yes / aqueduct / viaduct / cantilever / movable / covered / …"
      ],
      "building": [
        "apartments",
        "barracks",
        "bungalow",
        "cabin",
        "detached",
        "dormitory",
        "farm",
        "ger",
        "hotel",
        "house",
        "houseboat",
        "residential",
        "semidetached_house",
        "static_caravan",
        "stilt_house",
        "terrace",
        "tree_house",
        "commercial",
        "industrial",
        "kiosk",
        "office",
        "retail",
        "supermarket",
        "warehouse",
        "cathedral",
        "chapel",
        "church",
        "kingdom_hall",
        "monastery",
        "mosque",
        "presbytery",
        "religious",
        "shrine",
        "synagogue",
        "temple",
        "bakehouse",
        "bridge",
        "civic",
        "college",
        "fire_station",
        "government",
        "gatehouse",
        "hospital",
        "kindergarten",
        "public",
        "school",
        "toilets",
        "train_station",
        "transportation",
        "university",
        "barn",
        "conservatory",
        "cowshed",
        "farm_auxiliary",
        "greenhouse",
        "slurry_tank",
        "stable",
        "sty",
        "grandstand",
        "pavilion",
        "riding_hall",
        "sports_hall",
        "stadium",
        "hangar",
        "hut",
        "shed",
        "carport",
        "garage",
        "garages",
        "parking",
        "digester",
        "service",
        "transformer_tower",
        "water_tower",
        "storage_tank",
        "silo",
        "beach_hut",
        "bunker",
        "castle",
        "construction",
        "container",
        "military",
        "roof",
        "ruins",
        "tent",
        "yes",
        "user defined",
        "apartments",
        "barracks",
        "bungalow",
        "cabin",
        "detached",
        "dormitory",
        "farm",
        "ger",
        "hotel",
        "house",
        "houseboat",
        "residential",
        "semidetached_house",
        "static_caravan",
        "stilt_house",
        "terrace",
        "tree_house",
        "commercial",
        "industrial",
        "kiosk",
        "office",
        "retail",
        "supermarket",
        "warehouse",
        "cathedral",
        "chapel",
        "church",
        "kingdom_hall",
        "monastery",
        "mosque",
        "presbytery",
        "religious",
        "shrine",
        "synagogue",
        "temple",
        "bakehouse",
        "bridge",
        "civic",
        "college",
        "fire_station",
        "government",
        "gatehouse",
        "hospital",
        "kindergarten",
        "public",
        "school",
        "toilets",
        "train_station",
        "transportation",
        "university",
        "barn",
        "conservatory",
        "cowshed",
        "farm_auxiliary",
        "greenhouse",
        "slurry_tank",
        "stable",
        "sty",
        "grandstand",
        "pavilion",
        "riding_hall",
        "sports_hall",
        "stadium",
        "hangar",
        "hut",
        "shed",
        "carport",
        "garage",
        "garages",
        "parking",
        "digester",
        "service",
        "transformer_tower",
        "water_tower",
        "storage_tank",
        "silo",
        "beach_hut",
        "bunker",
        "castle",
        "construction",
        "container",
        "military",
        "roof",
        "ruins",
        "tent",
        "yes",
        "user defined"
      ],
      "building:colour": [
        "RGB hex triplet",
        "W3C colour name",
        "<RGB hex triplet> | <W3C colour name>"
      ],
      "building:fireproof": [
        "yes | no"
      ],
      "building:flats": [
        "number",
        "<number>"
      ],
      "building:levels": [
        "number",
        "<number>"
      ],
      "building:material": [
        "material type",
        "<material type>"
      ],
      "building:min_level": [
        "number",
        "<number>"
      ],
      "building:part": [
        "As building",
        "As building"
      ],
      "building:soft_storey": [
        "yes | no | reinforced"
      ],
      "bus_bay": [
        "both | left | right"
      ],
      "busway": [
        "lane",
        "lane"
      ],
      "capacity": [
        "amount"
      ],
      "change": [
        "yes | no | not_right | not_left | only_right | only_left"
      ],
      "charge": [
        "amount",
        "Number"
      ],
      "clothes": [
        "'s page",
        "see 's page"
      ],
      "covered": [
        "yes"
      ],
      "crossing": [
        "no / traffic_signals / uncontrolled / island / unmarked",
        "yes / no"
      ],
      "crossing:island": [
        "yes / no"
      ],
      "cutting": [
        "yes",
        "yes / left / right"
      ],
      "cycleway": [
        "lane",
        "opposite",
        "opposite_lane",
        "track",
        "opposite_track",
        "share_busway",
        "opposite_share_busway",
        "shared_lane",
        "lane",
        "opposite",
        "opposite_lane",
        "track",
        "opposite_track",
        "share_busway",
        "opposite_share_busway",
        "shared_lane"
      ],
      "destination": [
        "<place name of destination>"
      ],
      "disused": [
        "yes"
      ],
      "drinking_water": [
        "yes / no"
      ],
      "drive_in": [
        "yes / no"
      ],
      "drive_through": [
        "yes / no",
        "24/7 or mo md hh:mm-hh:mm. (read described syntax)"
      ],
      "ele": [
        "exchange",
        "connection_point",
        "distribution_point",
        "service_device",
        "data_center",
        "access",
        "access",
        "contact_line\nrail\nyes\nno",
        "exchange",
        "connection_point",
        "distribution_point",
        "service_device",
        "data_center",
        "contact_line / rail",
        "Number",
        "For values see access above",
        "For values see access above"
      ],
      "electric_bicycle": [
        "access",
        "For values see access above"
      ],
      "electrified": [
        "contact_line\nrail\nyes\nno",
        "contact_line / rail"
      ],
      "embankment": [
        "yes | dyke",
        "yes",
        "yes"
      ],
      "embedded_rails": [
        "yes | <type of railway>",
        "yes | <type of railway>",
        "yes/<type of railway>"
      ],
      "emergency": [
        "assembly_point",
        "phone",
        "assembly_point",
        "phone",
        "yes"
      ],
      "end_date": [
        "Date"
      ],
      "entrance": [
        "yes",
        "main",
        "exit",
        "service",
        "emergency",
        "An opening or gap in a barrier.",
        "yes | main | exit | service | emergency",
        "The entrance to an emergency ward.",
        "An entrance to a cave: a natural underground space large enough for a human to enter"
      ],
      "est_width": [
        "Number"
      ],
      "fee": [
        "yes / no"
      ],
      "female": [
        "yes"
      ],
      "fire_object:type": [
        "poo / szo"
      ],
      "fire_operator": [
        "Name"
      ],
      "fire_rank": [
        "1bis / 2 to 5"
      ],
      "foot": [
        "sidewalk",
        "crossing",
        "access",
        "sidewalk",
        "crossing",
        "For values see access above"
      ],
      "footway": [
        "sidewalk",
        "crossing",
        "sidewalk",
        "crossing"
      ],
      "ford": [
        "yes"
      ],
      "forestry": [
        "yes / no"
      ],
      "frequency": [
        "number [Hz]",
        "Number"
      ],
      "geological": [
        "moraine",
        "outcrop",
        "palaeontological_site",
        "volcanic_caldera_rim",
        "volcanic_vent",
        "volcanic_lava_field",
        "columnar_jointing",
        "moraine",
        "outcrop",
        "palaeontological_site",
        "volcanic_caldera_rim",
        "volcanic_vent",
        "volcanic_lava_field",
        "columnar_jointing"
      ],
      "golf_cart": [
        "access",
        "For values see access above"
      ],
      "goods": [
        "access",
        "For values see access above"
      ],
      "hazard": [
        "hazard",
        "see hazard"
      ],
      "hazmat": [
        "access",
        "For values see access above"
      ],
      "height": [
        "number",
        "A full-height turnstile.",
        "A height restrictor which prevents access of vehicles higher than a set limit.",
        "<number>"
      ],
      "hgv": [
        "access",
        "For values see access above"
      ],
      "highway": [
        "motorway",
        "trunk",
        "primary",
        "secondary",
        "tertiary",
        "residential",
        "motorway_link",
        "trunk_link",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "living_street",
        "service",
        "pedestrian",
        "track",
        "bus_guideway",
        "escape",
        "raceway",
        "road",
        "busway",
        "footway",
        "bridleway",
        "steps",
        "corridor",
        "path",
        "cycleway",
        "proposed",
        "construction",
        "bus_stop",
        "crossing",
        "elevator",
        "emergency_bay",
        "emergency_access_point",
        "give_way",
        "milestone",
        "mini_roundabout",
        "motorway_junction",
        "passing_place",
        "platform",
        "rest_area",
        "services",
        "speed_camera",
        "stop",
        "street_lamp",
        "toll_gantry",
        "traffic_mirror",
        "traffic_signals",
        "trailhead",
        "turning_circle",
        "turning_loop",
        "User Defined",
        "motorway",
        "trunk",
        "primary",
        "secondary",
        "tertiary",
        "[[ Too many OpenStreetMap Wiki entities accessed. | unclassified ]]",
        "residential",
        "motorway_link",
        "trunk_link",
        "primary_link",
        "secondary_link",
        "tertiary_link",
        "living_street",
        "service",
        "pedestrian",
        "track",
        "bus_guideway",
        "escape",
        "raceway",
        "road",
        "busway",
        "footway",
        "bridleway",
        "steps",
        "corridor",
        "path",
        "cycleway",
        "proposed",
        "construction",
        "bus_stop",
        "crossing",
        "elevator",
        "emergency_bay",
        "emergency_access_point",
        "give_way",
        "milestone",
        "mini_roundabout",
        "motorway_junction",
        "passing_place",
        "platform",
        "rest_area",
        "services",
        "speed_camera",
        "stop",
        "street_lamp",
        "toll_gantry",
        "traffic_mirror",
        "traffic_signals",
        "trailhead",
        "turning_circle",
        "turning_loop",
        "User Defined"
      ],
      "horse": [
        "access",
        "For values see access above"
      ],
      "hot_water": [
        "yes / no"
      ],
      "ice_road": [
        "yes"
      ],
      "incline": [
        "Number % | ° | up | down"
      ],
      "inline_skates": [
        "yes / no"
      ],
      "inscription": [
        "User Defined"
      ],
      "int_name": [
        "User defined"
      ],
      "internet_access": [
        "yes / wired / wlan / terminal / no"
      ],
      "junction": [
        "roundabout",
        "roundabout"
      ],
      "landuse": [
        "commercial",
        "construction",
        "education",
        "industrial",
        "residential",
        "retail",
        "allotments",
        "farmland",
        "farmyard",
        "flowerbed",
        "forest",
        "meadow",
        "orchard",
        "vineyard",
        "aquaculture",
        "basin",
        "salt_pond",
        "brownfield",
        "cemetery",
        "depot",
        "garages",
        "grass",
        "greenfield",
        "greenhouse_horticulture",
        "landfill",
        "military",
        "plant_nursery",
        "port",
        "quarry",
        "railway",
        "recreation_ground",
        "religious",
        "village_green",
        "winter_sports",
        "user defined",
        "railway",
        "commercial",
        "construction",
        "education",
        "industrial",
        "residential",
        "retail",
        "allotments",
        "farmland",
        "farmyard",
        "flowerbed",
        "forest",
        "meadow",
        "orchard",
        "vineyard",
        "aquaculture",
        "basin",
        "salt_pond",
        "brownfield",
        "cemetery",
        "depot",
        "garages",
        "grass",
        "greenfield",
        "greenhouse_horticulture",
        "landfill",
        "military",
        "plant_nursery",
        "port",
        "quarry",
        "railway",
        "recreation_ground",
        "religious",
        "village_green",
        "winter_sports",
        "user defined",
        "railway"
      ],
      "lanes": [
        "<number>"
      ],
      "layer": [
        "-5 to 5"
      ],
      "leaf_cycle": [
        "evergreen / deciduous / semi_evergreen / semi_deciduous / mixed"
      ],
      "leaf_type": [
        "broadleaved / needleleaved / mixed / leafless"
      ],
      "lhv": [
        "access",
        "For values see access above"
      ],
      "lit": [
        "yes | no",
        "excellent | good | intermediate | bad | horrible | no",
        "excellent | good | intermediate | bad | horrible | no"
      ],
      "loc_name": [
        "User defined"
      ],
      "location": [
        "underground / overground / underwater / roof / indoor"
      ],
      "male": [
        "yes",
        "yes"
      ],
      "max_age": [
        "age"
      ],
      "max_level": [
        "number",
        "<number>"
      ],
      "maxaxleload": [
        "Weight",
        "Weight"
      ],
      "maxlength": [
        "Length",
        "Length"
      ],
      "maxspeed": [
        "Speed",
        "<number>",
        "Speed"
      ],
      "maxstay": [
        "Number"
      ],
      "maxweight": [
        "Weight",
        "Weight"
      ],
      "maxwidth": [
        "Width",
        "Width"
      ],
      "min_age": [
        "age"
      ],
      "min_level": [
        "number",
        "number",
        "<number>",
        "<number>"
      ],
      "minspeed": [
        "Speed",
        "Speed"
      ],
      "mofa": [
        "access",
        "For values see access above"
      ],
      "moped": [
        "access",
        "For values see access above"
      ],
      "motor_vehicle": [
        "access",
        "For values see access above"
      ],
      "motorboat": [
        "access",
        "For values see access above"
      ],
      "motorcar": [
        "access",
        "For values see access above"
      ],
      "motorcycle": [
        "access",
        "For values see access above"
      ],
      "motorroad": [
        "yes | no"
      ],
      "mountain_pass": [
        "yes"
      ],
      "mtb:description": [
        "Text"
      ],
      "mtb:scale": [
        "0-6",
        "0-5",
        "0-4"
      ],
      "name": [
        "The name of a house.\nThis is sometimes used in some countries like England, Spain, Portugal, Latvia instead of (or in addition to) a house number.",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined",
        "User defined"
      ],
      "name:<lg>": [],
      "name:left": [
        "User defined"
      ],
      "name:right": [
        "User defined"
      ],
      "narrow": [
        "yes"
      ],
      "nat_name": [
        "User defined"
      ],
      "noexit": [
        "yes"
      ],
      "non_existent_levels": [
        "number",
        "<number>"
      ],
      "nudism": [
        "yes / obligatory / designated / no / customary / permissive"
      ],
      "official_name": [
        "User defined"
      ],
      "old_name": [
        "User defined"
      ],
      "oneway": [
        "yes | no | reversible",
        "yes / no / -1"
      ],
      "openig_hours:drive_through": [
        "24/7 or mo md hh:mm-hh:mm. (read described syntax)"
      ],
      "opening_hours": [
        "24/7 or mo md hh:mm-hh:mm. (read described syntax)",
        "24/7 or mo md hh:mm-hh:mm. (read described syntax)"
      ],
      "operator": [
        "Name",
        "User Defined"
      ],
      "overtaking": [
        "yes | no | caution | both | forward | backward"
      ],
      "parking:condition": [
        "free | ticket | disc | residents | customers | private"
      ],
      "parking:lane": [
        "parallel | diagonal | perpendicular | marked | no_parking | no_stopping | fire_lane."
      ],
      "passing_places": [
        "yes"
      ],
      "power_supply": [
        "yes / no"
      ],
      "priority": [
        "forward | backward",
        "designated | yes_unposted | end"
      ],
      "priority_road": [
        "designated | yes_unposted | end"
      ],
      "produce": [
        "User Defined"
      ],
      "psv": [
        "access",
        "For values see access above"
      ],
      "public_transport": [
        "stop_position",
        "platform",
        "station",
        "stop_position",
        "platform",
        "station"
      ],
      "railway": [
        "abandoned",
        "construction",
        "disused",
        "funicular",
        "light_rail",
        "miniature",
        "monorail",
        "narrow_gauge",
        "preserved",
        "rail",
        "subway",
        "tram",
        "halt",
        "platform",
        "station",
        "subway_entrance",
        "tram_stop",
        "buffer_stop",
        "derail",
        "crossing",
        "level_crossing",
        "tram_level_crossing",
        "signal",
        "switch",
        "railway_crossing",
        "turntable",
        "roundhouse",
        "traverser",
        "wash",
        "water_crane",
        "user defined",
        "number",
        "abandoned",
        "construction",
        "disused",
        "funicular",
        "light_rail",
        "miniature",
        "monorail",
        "narrow_gauge",
        "preserved",
        "rail",
        "subway",
        "tram",
        "number",
        "halt",
        "platform",
        "station",
        "subway_entrance",
        "tram_stop",
        "buffer_stop",
        "derail",
        "crossing",
        "level_crossing",
        "tram_level_crossing",
        "signal",
        "switch",
        "railway_crossing",
        "turntable",
        "roundhouse",
        "traverser",
        "wash",
        "water_crane",
        "user defined"
      ],
      "railway:track_ref": [
        "number",
        "number"
      ],
      "reg_name": [
        "User defined"
      ],
      "rental": [
        "'s page",
        "see 's page"
      ],
      "roadtrain": [
        "access",
        "For values see access above"
      ],
      "route": [
        "bicycle",
        "bus",
        "canoe",
        "detour",
        "ferry",
        "foot",
        "hiking",
        "horse",
        "inline_skates",
        "light_rail",
        "mtb",
        "piste",
        "railway",
        "road",
        "running",
        "ski",
        "subway",
        "train",
        "tracks",
        "tram",
        "trolleybus",
        "User defined",
        "bicycle",
        "bus",
        "canoe",
        "detour",
        "ferry",
        "foot",
        "hiking",
        "horse",
        "inline_skates",
        "light_rail",
        "mtb",
        "piste",
        "railway",
        "road",
        "running",
        "ski",
        "subway",
        "train",
        "tracks",
        "tram",
        "trolleybus",
        "User defined"
      ],
      "sac_scale": [
        "hiking | mountain_hiking | demanding_mountain_hiking | alpine_hiking | demanding_alpine_hiking | difficult_alpine_hiking"
      ],
      "sauna": [
        "yes / no"
      ],
      "service": [
        "alley",
        "driveway",
        "parking_aisle",
        "crossover",
        "siding",
        "spur",
        "yard",
        "alley | driveway | parking_aisle etc.",
        "crossover",
        "siding",
        "spur",
        "yard",
        "see opening_hours"
      ],
      "service_times": [
        "see opening_hours"
      ],
      "shop": [
        "alcohol",
        "bakery",
        "beverages",
        "brewing_supplies",
        "butcher",
        "cheese",
        "chocolate",
        "coffee",
        "confectionery",
        "convenience",
        "deli",
        "dairy",
        "farm",
        "frozen_food",
        "greengrocer",
        "health_food",
        "ice_cream",
        "pasta",
        "pastry",
        "seafood",
        "spices",
        "tea",
        "wine",
        "water",
        "department_store",
        "general",
        "kiosk",
        "mall",
        "supermarket",
        "wholesale",
        "baby_goods",
        "bag",
        "boutique",
        "clothes",
        "fabric",
        "fashion_accessories",
        "jewelry",
        "sewing",
        "shoes",
        "tailor",
        "watches",
        "wool",
        "charity",
        "second_hand",
        "variety_store",
        "beauty",
        "chemist",
        "cosmetics",
        "erotic",
        "hairdresser",
        "hairdresser_supply",
        "hearing_aids",
        "herbalist",
        "massage",
        "medical_supply",
        "nutrition_supplements",
        "optician",
        "perfumery",
        "tattoo",
        "agrarian",
        "appliance",
        "bathroom_furnishing",
        "doityourself",
        "electrical",
        "energy",
        "fireplace",
        "florist",
        "garden_centre",
        "garden_furniture",
        "gas",
        "glaziery",
        "groundskeeping",
        "hardware",
        "houseware",
        "locksmith",
        "paint",
        "security",
        "trade",
        "antiques",
        "bed",
        "candles",
        "carpet",
        "curtain",
        "doors",
        "flooring",
        "furniture",
        "household_linen",
        "interior_decoration",
        "kitchen",
        "lighting",
        "tiles",
        "window_blind",
        "computer",
        "electronics",
        "hifi",
        "mobile_phone",
        "radiotechnics",
        "vacuum_cleaner",
        "atv",
        "bicycle",
        "boat",
        "car",
        "car_repair",
        "car_parts",
        "caravan",
        "fuel",
        "fishing",
        "golf",
        "hunting",
        "jetski",
        "military_surplus",
        "motorcycle",
        "outdoor",
        "scuba_diving",
        "ski",
        "snowmobile",
        "sports",
        "swimming_pool",
        "trailer",
        "tyres",
        "art",
        "camera",
        "collector",
        "craft",
        "frame",
        "games",
        "model",
        "music",
        "musical_instrument",
        "photo",
        "trophy",
        "video",
        "video_games",
        "anime",
        "books",
        "gift",
        "lottery",
        "newsagent",
        "stationery",
        "ticket",
        "bookmaker",
        "cannabis",
        "copyshop",
        "dry_cleaning",
        "e-cigarette",
        "funeral_directors",
        "insurance",
        "laundry",
        "money_lender",
        "outpost",
        "party",
        "pawnbroker",
        "pest_control",
        "pet",
        "pet_grooming",
        "pyrotechnics",
        "religion",
        "storage_rental",
        "tobacco",
        "toys",
        "travel_agency",
        "weapons",
        "vacant",
        "yes",
        "user defined",
        "alcohol",
        "bakery",
        "beverages",
        "brewing_supplies",
        "butcher",
        "cheese",
        "chocolate",
        "coffee",
        "confectionery",
        "convenience",
        "deli",
        "dairy",
        "farm",
        "frozen_food",
        "greengrocer",
        "health_food",
        "ice_cream",
        "pasta",
        "pastry",
        "seafood",
        "spices",
        "tea",
        "wine",
        "water",
        "department_store",
        "general",
        "kiosk",
        "mall",
        "supermarket",
        "wholesale",
        "baby_goods",
        "bag",
        "boutique",
        "clothes",
        "fabric",
        "fashion_accessories",
        "jewelry",
        "[[ Too many OpenStreetMap Wiki entities accessed. | leather ]]",
        "sewing",
        "shoes",
        "tailor",
        "watches",
        "wool",
        "charity",
        "second_hand",
        "variety_store",
        "beauty",
        "chemist",
        "cosmetics",
        "erotic",
        "hairdresser",
        "hairdresser_supply",
        "hearing_aids",
        "herbalist",
        "massage",
        "medical_supply",
        "nutrition_supplements",
        "optician",
        "perfumery",
        "tattoo",
        "agrarian",
        "appliance",
        "bathroom_furnishing",
        "doityourself",
        "electrical",
        "energy",
        "fireplace",
        "florist",
        "garden_centre",
        "garden_furniture",
        "gas",
        "glaziery",
        "groundskeeping",
        "hardware",
        "houseware",
        "locksmith",
        "paint",
        "security",
        "trade",
        "antiques",
        "bed",
        "candles",
        "carpet",
        "curtain",
        "doors",
        "flooring",
        "furniture",
        "household_linen",
        "interior_decoration",
        "kitchen",
        "lighting",
        "tiles",
        "window_blind",
        "computer",
        "electronics",
        "hifi",
        "mobile_phone",
        "radiotechnics",
        "vacuum_cleaner",
        "atv",
        "bicycle",
        "boat",
        "car",
        "car_repair",
        "car_parts",
        "caravan",
        "fuel",
        "fishing",
        "golf",
        "hunting",
        "jetski",
        "military_surplus",
        "motorcycle",
        "outdoor",
        "scuba_diving",
        "ski",
        "snowmobile",
        "sports",
        "swimming_pool",
        "trailer",
        "tyres",
        "art",
        "camera",
        "collector",
        "craft",
        "frame",
        "games",
        "model",
        "music",
        "musical_instrument",
        "photo",
        "trophy",
        "video",
        "video_games",
        "anime",
        "books",
        "gift",
        "lottery",
        "newsagent",
        "stationery",
        "ticket",
        "bookmaker",
        "cannabis",
        "copyshop",
        "dry_cleaning",
        "e-cigarette",
        "funeral_directors",
        "insurance",
        "laundry",
        "money_lender",
        "outpost",
        "party",
        "pawnbroker",
        "pest_control",
        "pet",
        "pet_grooming",
        "pyrotechnics",
        "religion",
        "storage_rental",
        "tobacco",
        "toys",
        "travel_agency",
        "weapons",
        "vacant",
        "yes",
        "user defined"
      ],
      "short_name": [
        "User defined"
      ],
      "shower": [
        "yes / no"
      ],
      "sidewalk": [
        "both | left | right | no"
      ],
      "ski": [
        "access",
        "For values see access above"
      ],
      "smoothness": [
        "excellent | good | intermediate | bad | very_bad | horrible | very_horrible | impassable"
      ],
      "sorting_name": [
        "User defined"
      ],
      "speed_pedelec": [
        "access",
        "For values see access above"
      ],
      "start_date": [
        "(date)",
        "(date)",
        "Date"
      ],
      "surface": [
        "paved | unpaved | asphalt | concrete | paving_stones | sett | cobblestone | metal | wood | compacted | fine_gravel | gravel | pebblestone | plastic | grass_paver | grass | dirt | earth | mud | sand | ground"
      ],
      "tactile_paving": [
        "yes | no",
        "yes /no"
      ],
      "tank": [
        "access",
        "For values see access above"
      ],
      "telecom": [
        "exchange",
        "connection_point",
        "distribution_point",
        "service_device",
        "data_center",
        "exchange",
        "connection_point",
        "distribution_point",
        "service_device",
        "data_center"
      ],
      "tidal": [
        "yes"
      ],
      "toilets": [
        "yes / no",
        "yes / no"
      ],
      "toilets:wheelchair": [
        "yes / no"
      ],
      "toll": [
        "yes"
      ],
      "topless": [
        "yes / no"
      ],
      "tracks": [
        "number"
      ],
      "tracktype": [
        "grade1 | grade2 | grade3 | grade4 | grade5"
      ],
      "traffic_calming": [
        "bump | hump | table | island | cushion | yes | etc."
      ],
      "traffic_sign": [
        "city_limit",
        "city_limit"
      ],
      "trail_visibility": [
        "excellent | good | intermediate | bad | horrible | no"
      ],
      "trailblazed": [
        "yes | no | poles | cairns | symbols",
        "excellent | good | intermediate | bad | horrible | no"
      ],
      "trailblazed:visibility": [
        "excellent | good | intermediate | bad | horrible | no"
      ],
      "tunnel": [
        "yes",
        "yes"
      ],
      "turn": [
        "left | slight_left | through | right | slight_right | merge_to_left | merge_to_right | reverse"
      ],
      "unisex": [
        "yes"
      ],
      "usage": [
        "main\nbranch\nindustrial\nmilitary\ntourism"
      ],
      "vehicle": [
        "access",
        "access",
        "For values see access above",
        "For values see access above"
      ],
      "voltage": [
        "number"
      ],
      "wheelchair": [
        "yes / no",
        "yes / no / limited"
      ],
      "width": [
        "Width",
        "<number>",
        "Number",
        "Number",
        "Width"
      ],
      "winter_road": [
        "yes"
      ]
    };
  }

  request({
    features,
    bbox,
    timeout,
  }: OsmRequestParameters): Promise<Response> {
    const featureToRequest = (): string =>
      features
        .map((f) => {
          const geometry: string = f.geometry == 'all' ? 'nwr' : f.geometry;
          const element: string = f.value == '*' ? f.key : `${f.key}"="${f.value}`;
          return `${geometry}["${element}"](${bbox});`;
        })
        .join('\n');

    const request = `
        [out:json][timeout:${timeout || 50}];
        (
        ${featureToRequest()}
        );
        out body;
        >;
        out skel qt;
    `;

    console.log(`DEBUG : request=${request}`);

    return overpass(request);
  }
}
