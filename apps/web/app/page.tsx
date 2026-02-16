type HealthResponse = {
  status: string;
};

async function fetchHealth(): Promise<{ ok: boolean; status: string }> {
  try {
    const response = await fetch('http://localhost:3001/health', {
      cache: 'no-store'
    });

    if (!response.ok) {
      return { ok: false, status: `HTTP ${response.status}` };
    }

    const data = (await response.json()) as HealthResponse;
    return { ok: data.status === 'ok', status: data.status };
  } catch {
    return { ok: false, status: 'unreachable' };
  }
}

export default async function HomePage() {
  const health = await fetchHealth();

  return (
    <main>
      <h1>Influencer Platform</h1>
      <p>API health endpoint check:</p>
      <p>
        <strong>Status:</strong> {health.status}
      </p>
      <p>
        Expected endpoint: <code>GET http://localhost:3001/health</code>
      </p>
    </main>
  );
}
