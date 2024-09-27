<a id="top"></a>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const codeBlocks = document.querySelectorAll('.sqs-block-code pre');
  
  codeBlocks.forEach(function(block) {
    // Create a copy button
    const button = document.createElement('button');
    button.classList.add('copy-btn');
    button.innerText = 'Copy';
    
    // Add button to the code block
    block.parentNode.appendChild(button);
    
    // Copy functionality
    button.addEventListener('click', function() {
      const codeText = block.innerText;
      navigator.clipboard.writeText(codeText).then(function() {
        button.innerText = 'Copied!';
        setTimeout(function() {
          button.innerText = 'Copy';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy: ', err);
      });
    });
  });
});
</script>
