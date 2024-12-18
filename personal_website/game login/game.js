document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // تحقق بسيط من اسم المستخدم وكلمة المرور
    if (username === 'player' && password === '1234') {
        message.textContent = 'تسجيل الدخول ناجح! أهلاً بك في Minecraft!';
        message.style.color = 'green';
        // هنا يمكنك إضافة إعادة توجيه إلى صفحة اللعبة
    } else {
        message.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
        message.style.color = 'red';
    }
});
