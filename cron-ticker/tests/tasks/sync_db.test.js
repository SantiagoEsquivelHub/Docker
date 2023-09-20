const { syncDb } = require("../../tasks/sync_db")

describe('Sync DB testing', () => {
    test('should run the method two times', () => {
        syncDb()
        const times = syncDb()
        expect(times).toBe(2)
    })

})