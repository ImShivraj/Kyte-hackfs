export const is0xAddress = (address: string): boolean =>
    address.startsWith("0x") && address.length === 42
