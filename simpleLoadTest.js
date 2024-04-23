const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyZWM5NTg5LTU3OWUtNDAxNi04MTFhLTcwMjRhNmE5NTdlYiIsImVtYWlsIjoibWFpbnVzYW1vY3ZldHlAZ21haWwuY29tIiwibWZhIjpmYWxzZSwiaWF0IjoxNzEzNzc1MzA4LCJleHAiOjE3MTQwMzQ1MDh9.T7PQ93t_lFJFxJDAOfNJ4HrMNIcqM6yF6djavfMub-w`

// Define the function to make API calls
async function makeAPICall() {
    try {
      const response = await fetch('https://dev.services.chgcpt.com/sdlc/change/ALEX-72', {
        headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
            'authority': 'dev.services.chgcpt.com',
            'method': 'GET',
            'path': '/sdlc/change/ALEX-72',
            'scheme': 'https',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9',
            'Access-Control-Allow-Origin': '*',
            'If-None-Match': 'W/"f906-BLUgedCdzjxbxPYK5XXXjgWeQUE"',
            'Origin': 'https://dev.changecaptain.cc',
            'Priority': 'u=1, i',
            'Referer': 'https://dev.changecaptain.cc/',
            'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': "Windows",
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'X-Cc-Org-Id': '73ed5050-6993-4f91-b834-2e8b1f95a96c'
          }
      });
      const data = await response //.json();
      console.log(data); // Display the response data
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Define the function to perform load testing
  async function performLoadTest(requests, interval) {
    for (let i = 0; i < requests; i++) {
      await makeAPICall(); // Make an API call
      await new Promise(resolve => setTimeout(resolve, interval)); // Wait for the specified interval
    }
  }
  
  // Example usage: Perform n API calls with a n miliseconds interval between each call
  performLoadTest(10000, 100);
  