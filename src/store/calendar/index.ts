type CalendarEvent = {
    color: string,
    date: string
}

type InitialType = {
    eventsByDate: {
        '2021-01-01': CalendarEvent
    }
}

const initialState: InitialType = {
    eventsByDate: {
        '2021-01-01': {color: '#ff0022', date: '2021-01-01'}        
    }
}

export const SET_EVENT = 'calendar/SET_EVENT';
export const DELETE_EVENT = 'calendar/DELETE_EVENT';

export const setEvent = (event: CalendarEvent, date: string) => {
    const type: typeof SET_EVENT = SET_EVENT;
    return {
        type,
        event, 
        date
    };
}

type SetEventAction = ReturnType<typeof setEvent>;

export const deleteEvent = (date: string) => {
    const type: typeof DELETE_EVENT = DELETE_EVENT;
    return {
        type,
        date
    };
}

type SetDeleteAction = ReturnType<typeof deleteEvent>;

type CalendarActionType = SetEventAction | SetDeleteAction;


export const calendarReducer = (state = initialState, action: CalendarActionType) => {
    switch(action.type){        
        case SET_EVENT:
            return {
                ...initialState,
                eventsByDate: {
                    ...initialState.eventsByDate,
                    [action.date]: action.event
                }
            };
        case DELETE_EVENT:
            return {
                ...initialState,
                eventsByDate: {
                    ...initialState.eventsByDate,
                    [action.date]: null
                }
            };
    }
    return initialState;
}


export default {calendarReducer};