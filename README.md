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

## Ekran görüntüləri
<img width="900" alt="Ana ekranın görünüşü" src="https://github.com/user-attachments/assets/0fcd514e-76f8-48f5-987b-dfdd21a4fb2e" />
<img width="1000" alt="Axtarış nəticələri hissəsi" src="https://github.com/user-attachments/assets/d1eafc8c-0344-4edf-9d94-8451b06b6f61" />
<img width="1000" alt="Paginiton hissəsi" src="https://github.com/user-attachments/assets/ad995a73-5939-4b56-bfb0-941907f3aea8" />
<img width="800" alt="Mobil görünüş" src="https://github.com/user-attachments/assets/4517db4c-286a-4aa2-9931-9bb8c825ed22" />

## Live Demo
https://movie-search-app-kappa-peach.vercel.app
