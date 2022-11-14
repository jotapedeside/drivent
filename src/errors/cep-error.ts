import { ApplicationError } from "@/protocols";

export function cepError(): ApplicationError {
  return {
    name: "CepError",
    message: "This CEP does not exist!",
  };
}
