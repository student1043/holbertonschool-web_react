import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe("Testing basic returns", () => {

    test("getFullYear returns the correct year", () => {
        expect(getFullYear()).toEqual(2021);
    });

    test("GetFooterCopy Should return the toEqual Value", () => {
		expect(getFooterCopy(true)).toEqual("Holberton School");
	});

	test("getFooterCopy Should return the toEqual Value", () => {
		expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
	});

	test("getLatestNotification Should return the toEqual Value", () => {
		expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
	});

});
