import { ref, onMounted } from 'vue'
import axios from 'axios'

const WEATHER_API_KEY = 'b0c1c95d4c7942faab210856250404'

function conditionToIcon(condition) {
  switch (condition.toLowerCase()) {
    case 'clear': return 'fa-cloud-sun'
    case 'sunny': return 'fa-sun'
    case 'cloudy': case 'overcast': return 'fa-clouds'
    case 'partly cloudy': return 'fa-cloud-sun'
    case 'light rain': return 'fa-cloud-showers-heavy'
    case 'rain': case 'patchy rain nearby': case 'patchy rain possible': return 'fa-cloud-rain'
    case 'light snow': case 'snow': return 'fa-snowflake'
    case 'fog': case 'mist': return 'fa-smog'
    case 'thunderstorm': case 'thundery outbreaks possible': return 'fa-bolt'
    default: return 'fa-cloud-sun-rain'
  }
}

export function useWeather() {
  const icon = ref('fa-cloud-sun-rain')
  const loading = ref(true)
  onMounted(async () => {
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=98126&aqi=no`)
      icon.value = conditionToIcon(res.data.current.condition.text)
    } catch (e) { icon.value = 'fa-cloud-sun-rain' }
    finally { loading.value = false }
  })
  return { icon, loading }
}
