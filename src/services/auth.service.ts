import { User } from "../types/user.types";
import { userService } from "./user.service";

async function login(uid: string) {
  const user = await userService.getUserByUid(uid);
  return user;
}

async function signup(data: Partial<User>) {
  const newUser = await userService.addUser(data);
  return newUser;
}

export const authService = {
  login,
  signup,
};
