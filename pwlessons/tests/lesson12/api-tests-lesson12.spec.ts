import { test, expect } from '@playwright/test';
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

test.describe('ReqRes API tests', () => {
  test('GET users list', async () => {
    const response = await axios.get(`${BASE_URL}/users?page=2`);
    expect(response.status).toBe(200);
    expect(response.data.page).toBe(2);
    expect(response.data.data).toHaveLength(6); //6 users
  });

  test('POST create user', async () => {
    const userData = {
      name: 'morpheus',
      job: 'leader',
    };
    const response = await axios.post(`${BASE_URL}/users`, userData);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('name', userData.name);
    expect(response.data).toHaveProperty('job', userData.job);
    expect(response.data).toHaveProperty('id'); // ID in response
    expect(response.data).toHaveProperty('createdAt'); // timestamp in response (create)
  });

  test('PUT update user', async () => {
    const userData = {
      name: 'morpheus',
      job: 'zion resident',
    };
    const response = await axios.put(`${BASE_URL}/users/2`, userData);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name', userData.name);
    expect(response.data).toHaveProperty('job', userData.job);
    expect(response.data).toHaveProperty('updatedAt'); // timestamp in response (update)
  });
});
