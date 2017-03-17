describe('Person test', function () {
    it('create a person with the given name', function () {
        var p1 = new Person('Joe');
        expect(p1.getName()).toBe('Joe');
    });

    describe('setName', function () {
        it('should set the name of the Person to the name passed', function () {
            var p1 = new Person('Joe');
            var newName = 'Peter';
            p1.setName(newName);
            expect(p1.getName()).toBe(newName);
        });
    });

    describe('addBirthday', function () {
        it('should increment age by 1', function () {
            var p1 = new Person('Joe', 23);
            p1.addBirthday();
            expect(p1._age).toBe(24);
        });
    })

    describe('toString', function () {
        var p1;
        beforeEach(function () {
            p1 = new Person('Joe', 23);
        });

        it('should return a string with name and age', function () {
            expected = 'My name is Joe and I am 23 years old.'
            actual = p1.toString();
            expect(actual).toMatch(expected);
        });

        it('should call getName and getAge functions', function () {
            spyOn(p1, 'getName');
            spyOn(p1, 'getAge');
            p1.toString();
            expect(p1.getName).toHaveBeenCalled();
            expect(p1.getAge).toHaveBeenCalled();
        })
    });

    // Test with mocked functions
    xdescribe('mocked toString', function () {
        var p1;
        beforeEach(function () {
            p1 = new Person('Joe', 23);
        });

        it('should return a string with name and age', function () {
            spyOn(p1, 'getName').and.callFake(function () { return 'Sid' });
            spyOn(p1, 'getAge').and.callFake(function () { return 24 });
            expected = 'My name is Sid and I am 24 years old.'
            actual = p1.toString();
            expect(actual).toMatch(expected);
        });

        it('should call getName and getAge functions', function () {
            spyOn(p1, 'getName');
            spyOn(p1, 'getAge');
            p1.toString();
            expect(p1.getName).toHaveBeenCalled();
            expect(p1.getAge).toHaveBeenCalled();
        })
    })
});
