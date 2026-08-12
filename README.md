# vipaesthetics.com

Website for VIP Aesthetics, deployed to GoDaddy cPanel hosting via cPanel Git Version Control.

## How deployment works
1. Push changes to `main` on GitHub.
2. In cPanel → Git Version Control → vipaesthetics.com → Manage → Pull or Deploy: click **Update from Remote**, then **Deploy HEAD Commit**.
3. `.cpanel.yml` copies the site files into `/home/itjfn6oc46op/public_html/vipaesthetics.com`.

Any file added to the site must also be added to the copy task in `.cpanel.yml`.
