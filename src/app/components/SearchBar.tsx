"use client";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useBlogStore } from "../store/blogStore";


export const SearchBar = () => {
    const { setSearch } = useBlogStore();
    const [inputValue, setInputValue] = useState("");

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setSearch(value);
        }, 300),
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        debouncedSearch(e.target.value);
    };

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Поиск по заголовку или содержимому..."
                value={inputValue}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
};
