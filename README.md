# Movie Search App
OMDb açıq REST API-yə qoşulan, axtarış, debounce, loading/error/empty state-lər və pagination olan React tətbiqi.

## Layihənin qısa təsviri
React (Vite) ilə yaradılmış film axtarış tətbiqi. İstifadəçi axtarış qutusuna film adı yazır, tətbiq OMDb API-dən uyğun nəticələri çəkib kartlar şəklində göstərir. Axtarışda debounce tətbiq olunub ki, hər hərf üçün deyil, istifadəçi yazmağı dayandırdıqdan sonra sorğu getsin.

## İstifadə olunan texnologiyalar
- React 18 (Vite ilə qurulub)
- OMDb REST API (fetch)
- React Hooks (useState, useEffect, custom hook: useDebounce)
- CSS3 (responsiv dizayn)

## Xüsusiyyətlər
- OMDb API-dən `useEffect` vasitəsilə real-time film axtarışı
- Axtarışda debounce (hər hərfdə deyil, 500ms sükutdan sonra sorğu)
- Loading / error / boş nəticə / hələ axtarış edilməyib — 4 ayrı state ayrıca göstərilir
- Pagination (Previous/Next, ümumi səhifə sayı OMDb-nin `totalResults`-una görə hesablanır)
- Custom hook (`useDebounce`) ilə kod təşkili
- API key təhlükəsizlik üçün `.env` faylında saxlanılır, GitHub-a push olunmur
- Komponent əsaslı struktur: SearchBar, ResultsList, MovieCard, Pagination
