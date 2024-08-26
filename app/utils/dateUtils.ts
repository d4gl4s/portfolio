export const formatDate = (date: Date | undefined): string => {
  if (!date) return ""

  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const day = date.getDate()
  const month = date.getMonth() // Correct zero-based index
  const year = date.getFullYear()
  const weekday = days[date.getDay()] // Correctly retrieves the weekday

  const getOrdinalSuffix = (n: number): string => {
    if (n > 3 && n < 21) return "th" // Handles 11th, 12th, 13th
    switch (n % 10) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`

  return `${weekday}, ${dayWithSuffix} ${months[month]} ${year}`
}
