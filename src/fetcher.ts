export default async function fetchTemplate(templateUrl: string): Promise<string | boolean>{
    try {
        const response: Response = await fetch(`${templateUrl}`)
        if (!response.ok) throw new Error(`HTTP Error ${response.status} - ${response.statusText}`)
        return await response.text()
    } catch (error: any) {
        console.error(`Error while trying to load ${templateUrl}`, error);
        return false
    }
}