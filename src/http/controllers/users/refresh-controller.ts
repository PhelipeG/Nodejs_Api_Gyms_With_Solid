import { FastifyReply, FastifyRequest } from "fastify";

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({ onlyCookie: true }); // verifica apenas o cookie do refresh token
  // se o refresh token for válido, gera um novo token de acesso e um novo refresh token
  // e envia o novo refresh token no cookie

  const { role } = request.user;

  const token = await reply.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
      },
    }
  );

  const refreshToken = await reply.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
        expiresIn: "7d",
      },
    }
  );

  return reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      secure: true, // em produção deve ser true
      sameSite: true, // protege contra CSRF
      httpOnly: true, // não permite acesso via JavaScript
    })
    .status(200)
    .send({
      token,
    });
}
