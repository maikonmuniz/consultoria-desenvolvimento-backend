import isEmail from "validator/lib/isEmail";
import { EmailValidatorAdapter } from "./email-validator";
import validator from "validator";

jest.mock("validator", () => ({
    isEmail(): boolean {
        return true
    }
}))

describe("EmailValidator Adapter", () => {
    test("Should return false if validator returns false", () => {
        const sut = new EmailValidatorAdapter();
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isValid('invalid_email');
        expect(isValid).toBe(false);
    })

    test("Should return false if validator returns false", () => {
        const sut = new EmailValidatorAdapter();
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(true);
        const isValid = sut.isValid('valid_email@email.com');
        expect(isValid).toBe(true);
    })
})