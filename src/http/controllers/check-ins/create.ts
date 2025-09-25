import { makeCheckInUseCase } from "@/use-cases/factories/make-check-in-use.case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createCheckInParamsSchema = z.object({
    gymId: z.string().uuid(),
  });
  const createCheckinInBodySchema = z.object({
    latitude: z.number().refine((val) => {
      return Math.abs(val) <= 90;
    }),
    longitude: z.number().refine((val) => {
      return Math.abs(val) <= 180;
    }),
  });

  const { gymId } = createCheckInParamsSchema.parse(request.params);
  const { latitude, longitude } = createCheckinInBodySchema.parse(request.body);


  const checkInUseCase = makeCheckInUseCase();

  await checkInUseCase.execute({
    gymId,
    userId: request.user.sub,
    userLatitude: latitude,
    userLongitude: longitude,
  });
}
