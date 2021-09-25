export const httpRequest = async (URI: string, options = {}) => {
    const res = await fetch(URI, options);
    const data = await res.json();
    return { status: res.status, data: data.data };
}