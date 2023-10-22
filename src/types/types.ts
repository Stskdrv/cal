export interface OfferType {
    company: number;
    activity: number;
    level: number;
    custom_level: number;
    available: boolean;
    coach_override?: null;
    coach: number;
    additional_coaches?: (null)[] | null;
    partner_max_booking_count: number;
    establishment: number;
    meta_activity: number;
    credit_price_override: number;
    credit_price: number;
    date_start: string;
    duration_minute: number;
    effectif: number;
    establishment_override?: null;
    id: number;
    recurrence_id: string;
    waiting_list_max_size: number;
    waiting_list_disabled: boolean;
    bookings?: (null)[] | null;
    booking_options?: (null)[] | null;
    meta_activity_color: string;
    tot_slots: number;
    validated_booking_count: number;
    full: boolean;
    is_waiting_list_full: boolean;
    timezone_name: string;
    room_blueprint?: null;
    coach_payment_rule_id?: null;
    available_on_partnership: boolean;
    manager_only: boolean;
    whitelist_tags?: (null)[] | null;
    blacklist_tags?: (null)[] | null;
    group?: null;
    allow_guest_offer: boolean;
    roll_call_needs_validation: boolean;
    date_roll_call_last_modified?: null;
}

export interface ActivityType {
    activities?: (number)[] | null;
    alt_cover_main: string;
    auto_discard_active: boolean;
    auto_discard_hours_before_start: number;
    auto_discard_min_bookings_nb: number;
    category?: null;
    color: string;
    company: number;
    cover_main: string;
    custom_restriction_rule?: (null)[] | null;
    customer_enabled: boolean;
    description: string;
    establishments?: ({ id: number })[] | null;
    first_booking_minutes_until: number;
    id: number;
    images?: (null)[] | null;
    is_broadcast: boolean;
    is_workshop: boolean;
    last_booking_minutes: number;
    last_discard_minutes: number;
    name: string;
    next_slot: string;
    ordering_in_category: number;
    parent_category: number;
    rating: string;
    SCT: number;
}

export interface LocationType {
    links: Links;
    next_page?: null;
    page: number;
    count: number;
    results?: (ResultsEntity)[] | null;
}
export interface Links {
    next?: null;
    previous?: null;
}
export interface ResultsEntity {
    id: number;
    title: string;
    cover: string;
    location: Location;
    specific_info: string;
    easy_access: EasyAccess;
    associatedestablishment_set?: (number)[] | null;
    related_company: number;
    tzname: string;
    practical_info: string;
    capacity: number;
    disabled: boolean;
    has_next_slots: boolean;
    establishment_billing_group_id: number;
}
export interface Location {
    address: string;
    address_line_1: string;
    address_line_2: string;
    zipcode: string;
    city: string;
    state: string;
    country: string;
    country_code: string;
    geometry: string;
    latitude: number;
    longitude: number;
    geocoded_data: GeocodedData;
}
export interface GeocodedData {
    types?: (string)[] | null;
    geometry: Geometry;
    place_id: string;
    formatted_address: string;
    address_components?: (AddressComponentsEntity)[] | null;
}
export interface Geometry {
    bounds: BoundsOrViewport;
    location: NortheastOrSouthwestOrLocation;
    viewport: BoundsOrViewport;
    location_type: string;
}
export interface BoundsOrViewport {
    northeast: NortheastOrSouthwestOrLocation;
    southwest: NortheastOrSouthwestOrLocation;
}
export interface NortheastOrSouthwestOrLocation {
    lat: number;
    lng: number;
}
export interface AddressComponentsEntity {
    types?: (string)[] | null;
    long_name: string;
    short_name: string;
}
export interface EasyAccess {
    id: number;
    lines?: (string)[] | null;
    name: string;
}


export interface CoachType {
    firstname: string;
    lastname: string;
    name: string;
    gender: string;
    rating: string;
    id: number;
    birthday: string;
    photo: string;
    description: string;
    phone: string;
    color: string;
    email: string;
    associated_coach_id: number;
    associatedcoach_set?: (number)[] | null;
    disabled: boolean;
    default_payment_rule_id: number;
    coach_payment_rule_id: number;
    workshop_coach_payment_rule_id?: null;
    private_coach_payment_rule_id?: null;
    coach_payment_rule_group_id?: null;
    private_slots_coach_payment_rules?: (null)[] | null;
    facebook_url: string;
    instagram_url: string;
    has_access_to_coach_space: boolean;
    discipline_group?: null;
    categories_taught?: (null)[] | null;
    is_teaching_all_categories: boolean;
    meta_activities_taught?: (null)[] | null;
    workshops_taught?: (null)[] | null;
    is_teaching_all_workshops: boolean;
    discipline_group_establishments?: (null)[] | null;
    discipline_group_establishment_groups?: (null)[] | null;
    is_teaching_all_activities: boolean;
    date_joined_company?: null;
    date_left_company?: null;
    notes?: null;
}

export interface SessionType {
    id: number;
    date: string;
    time: string;
    duration: number;
    activity?: {
        name?: string;
        color?: string;
        logo?: string;
    };
    location?: string;
    coach?: {
        name?: string;
        photo?: string;
    };
}

export interface WeeklyOffersResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    next_page: string | null;
    page: number;
    count: number;
    results: OfferType[];
}