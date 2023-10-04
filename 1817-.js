const uamCount = new Array(k).fill(0); // Initialize an array to store the UAM count.

const userMinutes = {}; // Initialize an object to store the unique minutes for each user.

for (const [userId, time] of logs) {
  if (!userMinutes[userId]) {
    userMinutes[userId] = new Set(); // Create a Set to store unique minutes for the user.
  }
  userMinutes[userId].add(time);
}

for (const userId in userMinutes) {
  const uam = userMinutes[userId].size; // Calculate the UAM for the user.
  uamCount[uam - 1]++; // Increment the count for the corresponding UAM in the array.
}

return uamCount;
