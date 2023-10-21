export const useCapitalizeTitle = () => {
  function capitalizeTitle(str: string) {
    return str[0].toUpperCase() + str.substring(1)
  }

  return { capitalizeTitle };
}