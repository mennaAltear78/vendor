// import { z } from 'zod';

// export const authContextSchema = z.object({
//   isRequest: z.boolean(),
//   HotelInfo: z.object({


//   }).nullable(),
//   RoomInfo: z.object({


//   }).nullable(),
//   RoomId: z.string(),
//   specificHotelId: z.string(),
//   specificRoomId: z.string(),
//   isHotelImageDone: z.array(z.number()).optional(),
//   setRequest: z.function(),
//   setHotelImageDone: z.function(),
//   setHotelinfo: z.function(),
//   setRoominfo: z.function(),
//   SetRoomId: z.function(),
//   setspecificHotelId: z.function(),
//   setspecificRoomId: z.function()
// });
import { z } from 'zod';

// Multilingual text schema for fields that support multiple languages
const multilingualTextSchema = z.object({
  en: z.string().optional(),
  ar: z.string().optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: "At least one language must be provided" }
);

// Multilingual array schema for fields like language_spoken
const multilingualArraySchema = z.object({
  en: z.array(z.string()).optional(),
  ar: z.array(z.string()).optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: "At least one language array must be provided" }
);

// Time schema for check-in/check-out times
const timeSchema = z.object({
  time: z.string().regex(/^\d{1,2}\.\d{2}$/, "Time must be in format 'X.XX' or 'XX.XX'"),
  date: z.enum(['AM', 'PM'])
});

// Facility schema
const facilitySchema = z.object({
  facility: multilingualTextSchema,
  description: multilingualTextSchema.optional()
});

// Payment method schema
const paymentMethodSchema = z.object({
  payment_method: multilingualTextSchema,
  payment_icon: z.string().optional()
});

// Cancellation fee rule schema (days before check-in -> fee percentage)
const cancellationFeeRuleSchema = z.record(
  z.string().regex(/^\d+$/, "Key must be a string number representing days"),
  z.number().min(0).max(100, "Fee percentage must be between 0 and 100")
);

// Hotel policies schema
const hotelPoliciesSchema = z.object({
  check_in: z.object({
    from: timeSchema,
    until: timeSchema
  }),
  check_out: z.object({
    from: timeSchema,
    until: timeSchema
  }),
  cancelation_policy: multilingualTextSchema,
  cancelation_allowed: z.boolean(),
  cancelation_fee_rule: cancellationFeeRuleSchema,
  children_and_families: multilingualTextSchema,
  smoking_policy: multilingualTextSchema,
  pet_policy: multilingualTextSchema,
  payment_agreed_options: z.array(paymentMethodSchema)
});

// Main HotelInfo schema
export const hotelInfoSchema = z.object({
  name: z.string().min(1, "Hotel name is required"),
  type: multilingualTextSchema,
  description: multilingualTextSchema,
  language_spoken: multilingualArraySchema,
  facilities: z.array(facilitySchema),
  policies: hotelPoliciesSchema,
  latitude: z.number().min(-90).max(90, "Latitude must be between -90 and 90"),
  longitude: z.number().min(-180).max(180, "Longitude must be between -180 and 180"),
  hotel_star_rating: z.number().min(1).max(5, "Star rating must be between 1 and 5")
});

// Bed schema for room information
const bedSchema = z.object({
  type: multilingualTextSchema,
  count: z.number().min(1, "Bed count must be at least 1")
});

// Room capacity schema
const roomCapacitySchema = z.object({
  adults: z.number().min(1, "At least 1 adult capacity required"),
  children: z.number().min(0, "Children capacity cannot be negative")
});

// Room size schema
const roomSizeSchema = z.object({
  value: z.number().min(1, "Room size must be at least 1 square meter"),
  unit: z.string().default("m²").optional()
});

// Room facility schema
const roomFacilitySchema = z.object({
  name: multilingualTextSchema,
  description: multilingualTextSchema.optional()
});

// Main RoomInfo schema
export const roomInfoSchema = z.object({
  hotel: z.string().min(1, "Hotel ID is required"),
  name: z.string().min(1, "Room name is required"),
  type: multilingualTextSchema,
  view: multilingualArraySchema.optional(),
  description: multilingualTextSchema,
  price_per_night: z.number().min(0, "Price cannot be negative"),
  capacity: roomCapacitySchema,
  bed: z.array(bedSchema).min(1, "At least one bed type must be specified"),
  size: roomSizeSchema,
  main_facilities: z.array(roomFacilitySchema),
  available_rooms: z.number().min(0, "Available rooms cannot be negative"),
  available_in_your_own_bathroom: multilingualArraySchema.optional(),
  smoking_policy: multilingualTextSchema,
  facilities: multilingualArraySchema
});

// Updated AuthContext schema to include the new hotel and room schemas
export const authContextSchema = z.object({
  SetServiceType:z.function(),
  seviceType:z.string(),
  isRequest: z.boolean(),
  HotelInfo: hotelInfoSchema.optional().or(z.object({})),
  RoomInfo: roomInfoSchema.optional().or(z.object({})),
  RoomId: z.string(),
  specificHotelId: z.string(),
  specificRoomId: z.string(),
  isHotelImageDone: z.array(z.unknown()),
  setRequest: z.function(),
  setHotelImageDone: z.function(),
  setHotelinfo: z.function(),
  setRoominfo: z.function(),
  SetRoomId: z.function(),
  setspecificHotelId: z.function(),
  setspecificRoomId: z.function()
});

// Validation helper functions
export const validateHotelInfo = (data) => {
  try {
    return hotelInfoSchema.parse(data);
  } catch (error) {
    console.error('HotelInfo validation error:', error.errors);
    throw error;
  }
};

export const validateRoomInfo = (data) => {
  try {
    return roomInfoSchema.parse(data);
  } catch (error) {
    console.error('RoomInfo validation error:', error.errors);
    throw error;
  }
};

