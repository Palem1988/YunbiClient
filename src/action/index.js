export const updateBit = (bitType, bitData) => {
  return {
    type: 'BIT_UPDATE',
    bitTypePara: bitType,
    ticker: bitData
  }
}