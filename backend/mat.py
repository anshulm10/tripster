data = [{
  "originIndex": 3,
  "destinationIndex": 3,
  "status": {},
  "duration": "0s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 3,
  "destinationIndex": 0,
  "status": {},
  "distanceMeters": 38483,
  "duration": "3651s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 3,
  "destinationIndex": 2,
  "status": {},
  "distanceMeters": 37493,
  "duration": "3498s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 2,
  "destinationIndex": 0,
  "status": {},
  "distanceMeters": 3470,
  "duration": "647s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 2,
  "destinationIndex": 3,
  "status": {},
  "distanceMeters": 38415,
  "duration": "3898s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 1,
  "destinationIndex": 0,
  "status": {},
  "distanceMeters": 3605,
  "duration": "671s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 1,
  "destinationIndex": 2,
  "status": {},
  "distanceMeters": 1441,
  "duration": "435s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 2,
  "destinationIndex": 2,
  "status": {},
  "duration": "0s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 1,
  "destinationIndex": 1,
  "status": {},
  "duration": "0s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 2,
  "destinationIndex": 1,
  "status": {},
  "distanceMeters": 650,
  "duration": "183s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 0,
  "destinationIndex": 1,
  "status": {},
  "distanceMeters": 6008,
  "duration": "905s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 3,
  "destinationIndex": 1,
  "status": {},
  "distanceMeters": 37763,
  "duration": "3562s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 0,
  "destinationIndex": 3,
  "status": {},
  "distanceMeters": 39673,
  "duration": "4070s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 0,
  "destinationIndex": 0,
  "status": {},
  "duration": "0s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 0,
  "destinationIndex": 2,
  "status": {},
  "distanceMeters": 5897,
  "duration": "925s",
  "condition": "ROUTE_EXISTS"
}
,
{
  "originIndex": 1,
  "destinationIndex": 3,
  "status": {},
  "distanceMeters": 38549,
  "duration": "3916s",
  "condition": "ROUTE_EXISTS"
}
]


import numpy as np


indices = set()
for item in data:
    indices.add(item['originIndex'])
    indices.add(item['destinationIndex'])

# Determine size of the matrix
n = max(indices) + 1

# Initialize an empty nxn matrix
matrix = np.zeros((n, n))

# Fill in the matrix with distances
for item in data:
    if 'distanceMeters' in item:
        origin = item['originIndex']
        destination = item['destinationIndex']
        distance = item['distanceMeters']
        matrix[origin][destination] = distance

print(matrix)

import heapq

def dijkstra(matrix, start):
    n = len(matrix)
    distances = [float('inf')] * n
    distances[start] = 0
    visited = set()
    prev = [-1] * n
    pq = [(0, start)]

    while pq:
        dist, node = heapq.heappop(pq)
        if node in visited:
            continue
        visited.add(node)
        for neighbor, weight in enumerate(matrix[node]):
            if weight > 0 and neighbor not in visited:
                if dist + weight < distances[neighbor]:
                    distances[neighbor] = dist + weight
                    prev[neighbor] = node
                    heapq.heappush(pq, (dist + weight, neighbor))

    return prev, distances

def shortest_path(prev, start, end):
    path = []
    current = end
    while current != -1:
        path.append(current)
        current = prev[current]
    path.reverse()
    return path

start_node = 0
prev, distance = dijkstra(matrix, start_node)

visited = set()
current_node = start_node
shortest_paths = []

for _ in range(len(matrix)):
    shortest_paths.append(current_node)
    visited.add(current_node)
    min_distance = float('inf')
    next_node = None
    for neighbor, weight in enumerate(matrix[current_node]):
        if neighbor not in visited and weight < min_distance:
            min_distance = weight
            next_node = neighbor
    if next_node is None:
        break
    current_node = next_node

print("Shortest path for all nodes:", shortest_paths)