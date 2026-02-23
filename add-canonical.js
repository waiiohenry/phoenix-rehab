const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name === 'layout.tsx') {
      let relativeUrl = fullPath.replace(/^app\/?/, '/').replace(/\/layout\.tsx$/, '');
      if (relativeUrl === '/' || relativeUrl === '') {
        relativeUrl = '/';
      } else {
        // e.g. /about
      }

      let content = fs.readFileSync(fullPath, 'utf8');
      
      // If it already has alternates, skip
      if (content.includes('alternates:')) continue;

      // Match the export const metadata: Metadata = {
      const metadataRegex = /(export\s+const\s+metadata:\s*Metadata\s*=\s*\{)/;
      
      if (metadataRegex.test(content)) {
        content = content.replace(metadataRegex, `$1\n  alternates: {\n    canonical: '${relativeUrl}',\n  },`);
        fs.writeFileSync(fullPath, content);
        console.log(`Added canonical ${relativeUrl} to ${fullPath}`);
      }
    }
  }
}

processDir('app');
