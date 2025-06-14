import { z } from 'zod';

export const authContext1Schema = z.object({
  token: z.string().optional(),
  email: z.string().email().optional(),
  isLoggedIn: z.boolean(),
  formData: z.object({}).passthrough(),
  login: z.function(),
  logout: z.function(),
  sinUpFormData: z.function(),
  setToken: z.function()
});