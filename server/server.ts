let serverRunning = false

export function server() {
  if (serverRunning) {
    return
  }
  console.log('Starting server')
  serverRunning = true
  // Add server scripts here
}
