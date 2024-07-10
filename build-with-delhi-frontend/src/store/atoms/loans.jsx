import { atom, selector } from "recoil";

export const loansAtom = atom({
    key: 'loansAtom',
    default: []
})

export const filterQueryAtom = atom({
    key: 'filterQueryAtom',
    default: {}
})

export const updateFilterQuerySelctor = selector({
    key: 'updateFilterQuerySelctor',
    get: ({ get }) => {
        const filterQuery = get(filterQueryAtom)
        return filterQuery
    },
    set: ({ get, set }, newFilter) => {
        const currentFilter = get(filterQueryAtom)
        const updatedFilter = { ...currentFilter, ...newFilter }
        set(filterQueryAtom, updatedFilter)
    }
})
