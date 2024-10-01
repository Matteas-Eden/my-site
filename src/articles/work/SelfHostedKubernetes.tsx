import React from 'react'
import { ArticleProps } from '../ArticleProps'

export const SelfHostedKubernetes = ({ className, close }: ArticleProps) => (
  <article
    id="self-hosted-kubernetes"
    className={className}
    style={{ display: 'none' }}
  >
    <h2 className="major">Self-Hosted Kubernetes</h2>
    <p>
      This website, and all of the websites using the matteden.nz or matteas.nz
      domains, are hosted out of my personal{' '}
      <a href="https://kubernetes.io/" target="_blank">
        Kubernetes
      </a>{' '}
      instance running on a physical server with 99% uptime. The server itself
      runs{' '}
      <a href="https://www.proxmox.com/en/" target="_blank">
        Proxmox
      </a>
      , with Kubernetes installed in a container. Each website is itself
      contained within an{' '}
      <a href="https://www.nginx.com/" target="_blank">
        Nginx
      </a>{' '}
      pod, with{' '}
      <a href="https://traefik.io/traefik/" target="_blank">
        Traefik
      </a>{' '}
      being used as the reverse-proxy.{' '}
      <a href="https://argoproj.github.io/cd/" target="_blank">
        ArgoCD
      </a>{' '}
      is used for syncing application manifests between Kubernetes and a private
      repository on Github, which means that it's easy to spin up new
      applications and rollback manifests when needed.
      <br />
      <br />
      Application repositories, such as the individual websites, make use of a
      CI pipeline that is triggered on a push to the master branch. From this,
      an event is sent to the manifest repository, which triggers ArgoCD to
      deploy the restart the deployment containers and pull down the latest
      version of the source. All of this is managed via Github Actions and
      Workflows.
    </p>
    {close}
  </article>
)
