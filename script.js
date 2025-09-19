function saveContact() {
    // Create a simple vCard format
    const vcard = BEGIN:VCARD
VERSION:3.0
FN:Nagireddy Revoori
ORG:Tech Enthusiast
TITLE:Java Full Stack Developer
NOTE:Tech Enthusiast. Java Full Stack Developer. Avid Thinker.
EMAIL:revoorinagireddy7@gmail.com
URL:https://www.linkedin.com/in/nagireddyrevoori/
URL:https://x.com/nagired07
END:VCARD;

    // Create a blob and download
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nagireddy_Revoori.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success message
    alert('Contact saved successfully!');
}

// Add click handlers for social links
document.addEventListener('DOMContentLoaded', function() {
    const socialItems = document.querySelectorAll('.social-item');
    
    socialItems.forEach(item => {
        item.addEventListener('click', function() {
            const platform = this.querySelector('span').textContent.toLowerCase();
            
            switch(platform) {
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/nagireddyrevoori/', '_blank');
                    break;
                case 'x (twitter)':
                    window.open('https://x.com/nagired07', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:revoorinagireddy7@gmail.com';
                    break;
            }
        });
    });
});
