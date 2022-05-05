class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get() {
    return fetch(`${this.baseURL}.json`)
      .then(res => res.json())
      .catch(err => console.error(err))
  }

  post(data) {
    return fetch(`${this.baseURL}/orders.json`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.error(err))
  }
}

export default FetchWrapper