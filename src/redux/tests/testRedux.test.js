import usersReducer, {
    setUsers,
    setIsFetching,
    setCurrentPage,
    setFetchError,
    setUser,
} from '../userReducer';


describe('usersReducer', () => {
    const initialState = {
        items: [],
        user: [],
        isFetching: true,
        currentPage: 1,
        perPage: 10,
        totalCount: 0,
        isFetchError: false,
    };

    it('should handle SET_USERS', () => {
        const users = {
            items: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }],
            total_count: 2,
        };
        const action = setUsers(users);
        const newState = usersReducer(initialState, action);

        expect(newState.items).toEqual(users.items);
        expect(newState.totalCount).toEqual(users.total_count);
        expect(newState.isFetching).toBe(false);
    });

    it('should handle SET_IS_FETCHING', () => {
        const action = setIsFetching(false);
        const newState = usersReducer(initialState, action);

        expect(newState.isFetching).toBe(false);
    });

    it('should handle SET_USER', () => {
        const user = { id: 1, name: 'Test User' };
        const action = setUser(user);
        const newState = usersReducer(initialState, action);

        expect(newState.user).toEqual(user);
        expect(newState.isFetching).toBe(false);
        expect(newState.isFetchError).toBe(false);
    });

    it('should handle SET_CURRENT_PAGE', () => {
        const page = 2;
        const action = setCurrentPage(page);
        const newState = usersReducer(initialState, action);

        expect(newState.currentPage).toEqual(page);
    });

    it('should handle SET_FETCH_ERROR', () => {
        const action = setFetchError(true);
        const newState = usersReducer(initialState, action);

        expect(newState.isFetchError).toBe(true);
    });

    it('should return the initial state if no matching action type', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = usersReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});
