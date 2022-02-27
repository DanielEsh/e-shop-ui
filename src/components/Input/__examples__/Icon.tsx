import { Input } from '@/components/Input'

const Content = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 10.4C7.55817 10.4 7.2 10.7582 7.2 11.2C7.2 11.6418 7.55817 12 8 12C8.44183 12 8.8 11.6418 8.8 11.2C8.8 10.7582 8.44183 10.4 8 10.4ZM8.8 9.30396C8.8 9.17337 8.88622 9.0597 9.00792 9.01232C9.56158 8.79679 10.0344 8.40989 10.3553 7.90539C10.7158 7.33883 10.8607 6.66164 10.7638 5.99717C10.6669 5.3327 10.3345 4.72515 9.82721 4.28517C9.31993 3.84518 8.6715 3.60203 8 3.6C7.35268 3.59995 6.72533 3.82412 6.22463 4.23439C5.93213 4.47407 5.6934 4.76862 5.52008 5.09867C5.3146 5.48996 5.60493 5.92077 6.03828 6.00758L6.15914 6.03179C6.52585 6.10524 6.8734 5.84251 7.13149 5.57185C7.28833 5.40738 7.48865 5.29083 7.70914 5.23576C7.92963 5.18069 8.16122 5.18937 8.37698 5.26078C8.59273 5.33218 8.78377 5.46339 8.92787 5.63913C9.07196 5.81487 9.1632 6.02791 9.19095 6.25347C9.2187 6.47904 9.18182 6.70784 9.08462 6.91327C8.98741 7.11869 8.83387 7.29229 8.64186 7.41386C8.44985 7.53544 8.22726 7.59999 8 7.6C7.78783 7.6 7.58434 7.68429 7.43431 7.83431C7.28429 7.98434 7.2 8.18783 7.2 8.4V8.8C7.2 9.24183 7.55817 9.6 8 9.6H8.50396C8.66746 9.6 8.8 9.46746 8.8 9.30396Z" />
    </svg>
  )
}

const Icon = () => {
  return (
    <div className="w-64">
      <Input
        id="1"
        label="Label"
        value=""
        color="primary"
        icon={Content()}
      />
    </div>
  )
}

export default Icon