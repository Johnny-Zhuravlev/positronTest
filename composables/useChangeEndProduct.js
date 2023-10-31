export const useChangeEndProduct = () => {
  function changeEndProduct (number) {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return `${number} товаров`
    }
    n %= 10
    if (n === 1) {
      return `${number} товар`
    }
    if (n >= 2 && n <= 4) {
      return `${number} товара`
    }
    return `${number} товаров`
  }

  return { changeEndProduct }
}
